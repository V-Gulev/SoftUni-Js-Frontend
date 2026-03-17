function solve(progress) {

    const progressBar = renderProgressBar(progress);
    const inProgress = checkInProgress(progress);

    if (inProgress) {
        console.log(`${progress}% ${progressBar}`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }

    function renderProgressBar(progress) {
        let completed = progress / 10;
        let pending = 10 - completed;

        const bar = `[${'%'.repeat(completed)}${'.'.repeat(pending)}]`;
        return bar;
    }

    function checkInProgress(progress) {
        return progress < 100;
    }
}

solve(30);
solve(50);
solve(100);