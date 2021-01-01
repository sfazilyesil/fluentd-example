# fluentd-example
Example project for log collecting, unifying and forwarding with Fluentd. It collects Docker container logs via fluentd log driver and json file logs via fluentd file input observer. Then it processes and enriches them; finally send them to Kafka to be consumed later.

![](usage-example.gif)
