:warning: *Use of this software is subject to important terms and conditions as set forth in the License file* :warning:

# Create tickets in Spoke App

This App creates a ticket in the spoke from the hub. Since the Zendesk proxy will not allow one Zendesk to access another Zendesk all spokes have to have a DNS CNAME. The code uses the feedback tab api end point so the spoke has to allow anyone to create tickets and have created at least one feedback tab.

In the ```requester.hdbs``` you will put the CNAME of the spoke Zendesk as the value for ```zendeskSelect``` 

```
<div class="select" style>
    <label for="zendeskSelect">Select Spoke Account</label>
     <select id="zendeskSelect" name="zendeskSelect" onchange style="width: auto;">
          <option value="-">-</option>
          <option value="sutoka.techassistant.net">Germany</option>
     </select>
```


