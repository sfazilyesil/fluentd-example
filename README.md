# fluentd-example
Log collecting, unifying and forwarding with Fluentd example. It collects Docker container logs via fluentd log driver and json file logs via fluentd file input observer. Then it processes and enriches them; finally send them to Kafka to be consumed later.

![](usage-example.gif)
