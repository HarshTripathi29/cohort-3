# toggle Counter with useEffect

1️⃣ Mounting (Component Appears in the UI)

What happens?

    App component mounts first.

    Counter component mounts when counterVisible is true.

    When Counter mounts:

        useEffect inside Counter runs.

        setInterval starts, updating count every second.

        console.log("Counter Mounted") would run if added inside the effect.


2️⃣ Unmounting (Component is Removed from the UI)

What happens?

    After 5 seconds, setCounterVisible toggles false, removing Counter.

    Counter unmounts.

    The useEffect cleanup function runs:

        clearInterval(clock) stops the interval to prevent memory leaks.

        If we had console.log("Counter Unmounted"), it would run.


3️⃣ Re-rendering (Component Updates)

What happens?

    Counter re-renders every second because count is updated with setCount.

    When count changes, React re-renders the Counter, but it does not remount.

📌 Summary of Lifecycle 
Lifecycle	When It Happens	
Mounting	Counter first appears	useEffect(() => {...}, []) runs once, interval starts.
Unmounting	Counter disappears after 5 sec	Cleanup function runs (clearInterval(clock)).
Re-rendering	count updates every second	Counter updates UI, but does not remount.

🔹 Counter mounts → Starts ticking → Unmounts after 5 sec → Mounts again → Restarts from 0.
🔹 The cleanup function prevents memory leaks by stopping old intervals.

This cycle repeats every 5 seconds due to the toggling counterVisible state. 🚀