


Profile

Create or Update Customer

If the CustomerID is not informed, then a Customer will be created.

When a CustomerID is informed this are the endpoints that are called:
- /v1/Profile/API.svc/web/SearchCustomer - Allow to know the IntegrationID about the Customer that already exists
- /v1/Profile/API.svc/web/GetPerson - Get the info about Customer and Person when the CustomerType is equal to 'P'
- /v1/Profile/API.svc/web/GetCompany - Get the info about Customer and Company when the CustomerType is equal to 'C'

if the fields are not informed, then will be filled with the previous value, because if not that will make the value null or empty.
This allow to only inform the fields that have to change when making an update at the Customer.

After that are made a request to the respective endpoint:
- When CustomerType = 'P', the request are send to SavePerson
- When CustomerType = 'C', the request are send to SaveCompany 

