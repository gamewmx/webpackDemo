import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    function* generator(){
        console.log('====')
        console.log('----')
        yield 1
        let b = yield (setTimeout(()=>{return 2}),5000);
        console.log(b)
        return 3
    }
    let gen = generator()
    // console.log(gen.next())
    console.log('script start');

    setTimeout(function() {
        console.log('setTimeout');
    }, 0);

    console.log('script end');
  return (
<>
    <div id={'test'}>
    <div id={'left'}></div>
    {/*<div id={'right'}></div>*/}
    </div>
    </>
  );
}

export default App;
