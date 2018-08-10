/*********************************************************************************
*  WEB222 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Sang Jun, Park          Student ID: 112293170          Date: 2018-02-20
*
********************************************************************************/ 

/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */




/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/

var CustomerDB = 
{
    customers:[],
    stores:[],
    addresses:[],
    //adds objects in allData array in to customers stores and addresses array - completed
    insertData: function(data)
    {
       for (var i = 0; i < data.length; i++)
       {
          if (data[i].type == "store")
          {
             CustomerDB.addStore(data[i]);
          }
          else if (data[i].type == "customer")
          {
            CustomerDB.addCustomer(data[i]);
          }
          else if (data[i].type == "address")
          {
              CustomerDB.addAddress(data[i]);
          }
       }
    },
    addStore: function(storeObj){
      CustomerDB.stores.push(storeObj);
    },
    addCustomer: function(customerObj){
        customerObj.data.add_date = new Date();
        CustomerDB.customers.push(customerObj);
    },
    addAddress: function(addressObj){
      CustomerDB.addresses.push(addressObj);
    },
    outputCustomerById: function(customer_id){
        for (var i = 0; i < CustomerDB.customers.length; i++){
            if (CustomerDB.customers[i].data.customer_id == customer_id)
            {
                console.log(`Customer ${CustomerDB.customers[i].data.customer_id}: ${CustomerDB.customers[i].data.first_name} ${CustomerDB.customers[i].data.last_name} (${CustomerDB.customers[i].data.email})`);
                console.log(`Home Address: ${CustomerDB.getAddressById(CustomerDB.customers[i].data.address_id).data.address} ${CustomerDB.getAddressById(CustomerDB.customers[i].data.address_id).data.city}, ${CustomerDB.getAddressById(CustomerDB.customers[i].data.address_id).data.province}. ${CustomerDB.getAddressById(CustomerDB.customers[i].data.address_id).data.postal_code}`);
                console.log(`Joined: ${CustomerDB.customers[i].data.add_date}\n`);
            }
        }
    },
    outputAllCustomers: function() 
    {
        console.log('All Customers\n')
        for(var i = 0; i < CustomerDB.customers.length; i++)
        {
            console.log(`Customer ${CustomerDB.customers[i].data.customer_id}: ${CustomerDB.customers[i].data.first_name} ${CustomerDB.customers[i].data.last_name} (${CustomerDB.customers[i].data.email})`);
            console.log(`Home Address: ${CustomerDB.getAddressById(CustomerDB.customers[i].data.address_id).data.address} ${CustomerDB.getAddressById(CustomerDB.customers[i].data.address_id).data.city}, ${CustomerDB.getAddressById(CustomerDB.customers[i].data.address_id).data.province}. ${CustomerDB.getAddressById(CustomerDB.customers[i].data.address_id).data.postal_code}`);
            console.log(`Joined: ${CustomerDB.customers[i].data.add_date}\n`);
        }
    },
    outputCustomersByStore: function(store_id)
    {
        for (var i = 0; i < CustomerDB.stores.length; i++)
        {
          if (CustomerDB.stores[i].data.store_id == store_id)
          {
            console.log(`Customers in store: ${CustomerDB.stores[i].data.name}\n`);
          }
        }
        for (var i = 0; i < CustomerDB.customers.length; i++)
        {
            if (CustomerDB.customers[i].data.store_id == store_id)
            {
                CustomerDB.outputCustomerById(CustomerDB.customers[i].data.customer_id);
            }
        }
      },
    removeCustomerById: function(customer_id)
    {
       var customerAddress = 0;
       var anotherCustomer = false;
       for (var i = 0; i < CustomerDB.customers.length; i++)
       {
         if (CustomerDB.customers[i].data.customer_id == customer_id)
         {
           customerAddress = CustomerDB.customers[i].data.address_id;
           CustomerDB.customers.splice(i, 1);
         }
       }
       for (var i = 0; i < CustomerDB.customers.length; i++)
       {
         if (CustomerDB.customers[i].data.address_id == customerAddress)
         {
           anotherCustomer = true;
         }
       }
       if (!anotherCustomer)
         for (var i = 0; i < CustomerDB.addresses.length; i++)
         {
           if (CustomerDB.addresses[i].data.address_id == customerAddress)
           {
             CustomerDB.addresses.splice(i, 1);
           }
         }
    },
    getAddressById: function(address_id)
    {
       var addressObj = null;
       for(var i = 0; i < CustomerDB.addresses.length; i++)
       {
         if (CustomerDB.addresses[i].data.address_id == address_id)
         {
           addressObj = CustomerDB.addresses[i];
         }
       }
      return addressObj;
    },
    outputAllAddresses: function()
    {
       console.log("All Addresses\n");
       for (var i = 0; i < CustomerDB.addresses.length; i++)
       {
         console.log(`Address ${CustomerDB.addresses[i].data.address_id}: ${CustomerDB.addresses[i].data.address} ${CustomerDB.addresses[i].data.city}, ${CustomerDB.addresses[i].data.province}. ${CustomerDB.addresses[i].data.postal_code}\n`);
       }
    },
    removeAddressById: function(address_id)
    {
       var customerAddress = 0;
       var anotherAddress = false;
       for (var i = 0; i < CustomerDB.customers.length; i++)
       {
           if (CustomerDB.customers[i].data.address_id == address_id)
           {
               anotherCustomer = true;
            }
       }
       if (!anotherCustomer)
         for (var i = 0; i < CustomerDB.addresses.length; i++)
         {
           if (CustomerDB.addresses[i].data.address_id == customerAddress)
           {
             addresses.splice(i, 1);
           }
         }
    },



    getStoreById: function(store_id)
    {
       var storeObj = null;
       for(var i = 0; i < CustomerDB.stores.length; i++){
         if (CustomerDB.stores[i].data.store_id == store_id){
           storeObj = store[i];
         }
       }
       return storeObj;
    },

    getAddressById: function(address_id){
        var addressObj = null;
        for(var i = 0; i < CustomerDB.addresses.length; i++){
          if (CustomerDB.addresses[i].data.address_id == address_id){
            addressObj = CustomerDB.addresses[i];
          }
        }
        return addressObj;
      },
      outputAllStores: function(){
        console.log("All Stores\n");
        for (var i = 0; i < CustomerDB.stores.length; i++){
          console.log(`Store ${CustomerDB.stores[i].data.store_id}: ${CustomerDB.stores[i].data.name}`);
            console.log(`Location: ${CustomerDB.getAddressById(CustomerDB.stores[i].data.address_id).data.address} ${CustomerDB.getAddressById(CustomerDB.stores[i].data.address_id).data.city}, ${CustomerDB.getAddressById(CustomerDB.stores[i].data.address_id).data.province}. ${CustomerDB.getAddressById(CustomerDB.stores[i].data.address_id).data.postal_code}\n`);
        }
      },
};



// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n"); 


