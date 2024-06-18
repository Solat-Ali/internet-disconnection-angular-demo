# Network Status Check Demo

This is a simple Angular application which demonstrates real-time network status check using RxJS. 

## How To Test: 
Just open the network tab, go to Network -> Throttling and toggle between "Offline" and "Online" options to see the output. 

## Note: 
The network monitoring logic is written within `network-status.service` file. If you would want to execute any additional checks, use the `tap` section of RxJS `merge` stream. 


If you found this repository useful, consider giving it a star! <br/> 
Created By [Solat Ali](https://www.linkedin.com/in/solat-ali)


