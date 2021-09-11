function getExpectOrderFeed(statusCode, body, type) {

    function getExpect(status, input, typ) {
        var spec = []

        spec.push(
            {
                "name": "feed",
                "label": "Feed Configuration",
                "type": "text",
                "disabled": true
            }
        )

spec.push(
{
"name": "feed",
"label": "Feed Configuration",
"type": "collection",
//"disabled": true,
//"spec": "rpc://orderFeedGetConfig"
"spec": [
{
"name": "filter",
"label": "Filter",
"type": "collection",
"spec": [
{
    "name": "type",
    "label": "Type",
    "type": "text",
    //"disabled": true,
    "default": input[`filter`][`type`],
    "rpc": {
        "label": "Change the Feed Configuration",
        "url": "rpc://orderFeedSaveConfig",
        "parameters": [
            {
                "name": "filter",
                "label": "Filter",
                "type": "collection",
                "spec": [
                    {
                        "name": "type",
                        "label": "Type",
                        "type": "select",
                        "options": [
                            {
                                "label": "From Workflow",
                                "value": "FromWorkflow",
                                                            "help": "When you use `FromWorkflow`, you can only filter order updates by status.",
                                "nested": [
                                    {
                                        "name": "status",
                                        "label": "Order Status",
                                        "type": "select",
                                        "multiple": true,
                                        "default": "ready-for-handling",
                                        "dynamic": true,
                                        "options": "rpc://orderStatus"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "queue",
                "label": "Queue",
                "type": "collection",
                "spec": [
                    {
                        "name": "visibilityTimeoutInSeconds",
                        "label": "Visibility Timeout (Seconds)",
                        "type": "integer",
                        "default": 240,
                        "help": "Period of time for which an item is not visible in the feed after it has been retrieved with the Get feed items request. Measured in seconds. [For more about](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1#queue)"
                    },
                    {
                        "name": "messageRetentionPeriodInSeconds",
                        "label": "Message Retention Period (Seconds)",
                        "type": "integer",
                        "default": 345600,
                        "help": "Maximum life span of an order update after it gets to the feed. When a feed item is on the feed for this period of time, it is removed from the feed. Measured in seconds. [For more about](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1#queue)"
                    }
                ]
            }
        ]
    }
}
]
}
]
}
)

        return spec
    }

    return getExpect(statusCode, body, type)
}