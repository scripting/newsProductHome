#### 1/30/24; 2:05:37 PM by DW

You can now add a "include" element at the top level of your spec.

Like the others it can be a string or an array of strings.

The strings are URLs of files you want included.

They can be either style or code. That is, have .css or .js extensions. You can have as many as you want.

We read each one, in the order they appear in the array, and add them either as &lt;style> or &lt;script> to the head section of the template for news products.

{

#### 12/30/23; 10:12:26 AM by DW

Added support for script and style configuration from the JSON file. 
