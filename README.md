:warning: *Use of this software is subject to important terms and conditions as set forth in the License file* :warning:

# Create Tickets in Spoke App

## Description:

This App creates a ticket in the spoke from the hub.

## App location:

* Ticket sidebar
* New ticket sidebar

## Features:

* Allows you to create a ticket in a spoke while in the hub using the Zendesk API

## Set-up/installation instructions:

To install this App, you will first need to modify ```requester.hdbs``` to include an external hostname (e.g. support.alphabrand.com) for each spoke in which you want to create tickets.

Since the Zendesk proxy will not allow one Zendesk to access another Zendesk, all spokes must have an external hostname (done via a DNS CNAME record) pointing to the actual Zendesk subdomain. The code uses the feedback tab API end point so the spoke also has to allow anyone to create tickets and have created at least one feedback tab.

In the ```requester.hdbs``` you will put the CNAME of the spoke Zendesk as the value for ```zendeskSelect``` 

```
<div class="select" style>
    <label for="zendeskSelect">Select Spoke Account</label>
     <select id="zendeskSelect" name="zendeskSelect" onchange style="width: auto;">
          <option value="-">-</option>
          <option value="sutoka.techassistant.net">Germany</option>
     </select>
```

## Contribution:

Pull requests are welcome.

## Screenshot(s):
![A screenshot showing the Create Tickets in Spoke app in action](http://i.imgur.com/EqYY4uG.gif)

