import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { getMyBooks } from "../services/get_book_info";

import '../style/PageGoal.css';
import '../style/Home.css';

function PageGoal() {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  const [started, setStarted] = useState(false); // only start when visible

  const [cur_pages, setCur_Pages] = useState(0);
  const [total_pages, setTotal_Pages] = useState(0);

  // barCompleted is set once to trigger the ProgressBar CSS transition
  const [barCompleted, setBarCompleted] = useState(0);

  // floating label position and displayed pages (animated via rAF)
  const [floatingPercent, setFloatingPercent] = useState(0);
  const [displayedPages, setDisplayedPages] = useState(0);

  // observe visibility and trigger start once
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStarted(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1 } // adjust threshold as needed
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // fetch data only after started === true
  useEffect(() => {
    if (!started) return;

    let cancelled = false;
    const fetchData = async () => {
      try {
        const data = await getMyBooks();
        if (cancelled) return;
        console.log(data);
        const books = data?.data?.me?.[0]?.user_books || [];
        let curTotal = 0;
        books.forEach(ub => {
            const pages = ub.book?.pages || 0;
            curTotal += pages;
        });

        setCur_Pages(curTotal);
        setTotal_Pages(100000); // keep your goal or compute it
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
    return () => { cancelled = true; };
  }, [started]);

  // animate bar + floating label only after started and after data arrives
  useEffect(() => {
    if (!started) return;
    if (total_pages <= 0) return;

    const targetPct = Math.round((cur_pages / total_pages) * 100);
    const duration = 2000; // ms — should match ProgressBar transitionDuration

    // trigger the bar's CSS transition by setting its completed to targetPct once
    setBarCompleted(targetPct);

    // animate the floating label and number from 0 -> targetPct / cur_pages
    const startTime = performance.now();
    const startPct = 0;
    const startPages = 0;
    const targetPages = cur_pages;

    const easeInOut = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = now => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = easeInOut(t);

      const curPct = startPct + (targetPct - startPct) * eased;
      const curPages = Math.round(startPages + (targetPages - startPages) * eased);

      // clamp floating percent a touch inside [0,100] so the label doesn't overflow edges
      const clamped = Math.min(98, Math.max(2, Math.round(curPct)));

      setFloatingPercent(clamped);
      setDisplayedPages(curPages);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        rafRef.current = null;
      }
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [started, cur_pages, total_pages]);

  return (
    <div className="page-goal" ref={containerRef}>
      <h1 className='of-prose'>{new Date().getFullYear()} Page Goal</h1>

      {/* static total on the right above the bar */}
      <div className="pages-info">
        <div className="total-pages">Goal: {total_pages}</div>
      </div>

      {/* progress wrapper — floating label moves over the bar */}
      <div className="progress-wrapper">
        <div
          className="floating-pages"
          style={{ left: `${floatingPercent}%` }}
          aria-hidden
        >
          {displayedPages}
        </div>

        <ProgressBar
          completed={barCompleted}
          bgColor="#4caf50"
          transitionDuration="2s"
          transitionTimingFunction="ease-in-out"
        />
      </div>
    </div>
  );
}

export default PageGoal;