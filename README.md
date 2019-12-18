# Reproducable 

Seems to be incompatible with `preact-css-transition-group`

## Steps
```shell script
npm ci
npx rollup -c
```

## Expected result
No error

## Actual result
```
(plugin commonjs) SyntaxError: Unexpected token (20:21) in node_modules/preact-css-transition-group/src/CSSTransitionGroup.js

node_modules/preact-css-transition-group/src/CSSTransitionGroup.js (20:21)
18: 
19: export class CSSTransitionGroup extends Component {
20:   static defaultProps = {
                          ^
21:     component: 'span',
22:     transitionEnter: true,
SyntaxError: Unexpected token (20:21) in /home/e.bruines00000/workspaces/reproductions/rollup-commonjs-uppy/node_modules/preact-css-transition-group/src/CSSTransitionGroup.js
    at Object.pp$4.raise (/home/e.bruines00000/workspaces/reproductions/rollup-commonjs-uppy/node_modules/acorn/dist/acorn.js:2836:15)
    at Object.pp.unexpected (/home/e.bruines00000/workspaces/reproductions/rollup-commonjs-uppy/node_modules/acorn/dist/acorn.js:689:10)
    at Object.pp.expect (/home/e.bruines00000/workspaces/reproductions/rollup-commonjs-uppy/node_modules/acorn/dist/acorn.js:683:28)
    at Object.pp$3.parseMethod (/home/e.bruines00000/workspaces/reproductions/rollup-commonjs-uppy/node_modules/acorn/dist/acorn.js:2620:10)
    at Object.pp$1.parseClassMethod (/home/e.bruines00000/workspaces/reproductions/rollup-commonjs-uppy/node_modules/acorn/dist/acorn.js:1387:25)
    at Object.pp$1.parseClassElement (/home/e.bruines00000/workspaces/reproductions/rollup-commonjs-uppy/node_modules/acorn/dist/acorn.js:1376:10)
    at Object.pp$1.parseClass (/home/e.bruines00000/workspaces/reproductions/rollup-commonjs-uppy/node_modules/acorn/dist/acorn.js:1315:26)
    at Object.pp$1.parseStatement (/home/e.bruines00000/workspaces/reproductions/rollup-commonjs-uppy/node_modules/acorn/dist/acorn.js:833:19)
    at Object.parseStatement (/home/e.bruines00000/workspaces/reproductions/rollup-commonjs-uppy/node_modules/rollup/dist/rollup.js:11676:30)
    at Object.pp$1.parseExport (/home/e.bruines00000/workspaces/reproductions/rollup-commonjs-uppy/node_modules/acorn/dist/acorn.js:1438:31)
```

## Some info

Setting `mainFields` to exclude `jsnext:main` is a workaround in this minimalistic setup, but not in real-world scenarios.
