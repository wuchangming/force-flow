# force-flow API
force the workflow order

what is force-flow API ?

:white_check_mark:
```
ffApi(async(callbackStep1, callbackStep2) => {
    await callbackStep1();
    await callbackStep2();
})
```
:x:
Not in order
```
ffApi(async(callbackStep1, callbackStep2) => {
    await callbackStep2();
    await callbackStep1();
})
```
:x:
Incomplete
```
ffApi(async(callbackStep1, callbackStep2) => {
    await callbackStep1();
})
```
