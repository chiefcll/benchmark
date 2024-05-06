// get amount=1000 from query params
import { renderSync as render, Text, startLightning, Config } from "@lightningjs/solid"
const urlParams = new URLSearchParams(window.location.search);
const amount = urlParams.get('amount');

//Config.debug = true;
await startLightning();

const results = document.getElementById('results');
if (results) {
    results.style.padding = '20px';
    results.style.fontFamily = 'monospace';
    results.style.fontSize = '20px';
    results.style.color = 'black';
}

const log = (msg, replace) => {
    if (msg !== ' ')
        console.log(msg);

    if (!results) {
        return;
    }

    if (replace) {
        results.innerHTML = '';
    }

    results.appendChild(document.createTextNode(msg));
    results.appendChild(document.createElement('br'));
}

// @ts-ignore
const suite = new Benchmark.Suite('UI Component Testing')

suite.add('Component 1', () => {
    render(() => <Text>Hello World</Text>, '#app');
    return true;
});

suite.add('Component 2', () => {
    render(() => <Text>Hello World</Text>, '#app');
    return true;
});

suite.on('complete', () => {
    log(' ');
    log('Benchmark complete.')
    log('Fastest is ' + suite.filter('fastest').map('name'));
    log('Slowest is ' + suite.filter('slowest').map('name'));
});

suite.on('cycle', (event) => {
    const benchmark = event.target;
    log(benchmark.toString());
});

log('Ready!');

setTimeout(() => {
    log('Starting benchmark...', true);
    log(' ');
    setTimeout(() => {
        suite.run();
    }, 10);
}, 100);
