// ADD NEW ITEM TO END OF LIST
var l = document.getElementsByTagName('ul');
var cream = document.createElement('li');
cream.innerHTML = "cream";
l[0].appendChild(cream);

// ADD NEW ITEM START OF LIST
var kale = document.createElement('li');
kale.innerHTML = "kale";
l[0].insertBefore(kale, l[0].firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS

var li = document.getElementsByTagName('li');

for(var i = 0; i < li.length; i++) {
    li[i].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var h = document.getElementById("num");
var p = document.createElement('p');
var items = li.length;
p.innerHTML = items;
p.setAttribute('background-color', 'white');
h.innerHTML = h.innerHTML + " " + p.innerHTML;
