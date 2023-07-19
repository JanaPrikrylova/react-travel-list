/*
- next up, let's take care of updating item by toggling their packed status.
-so basically that's the functionality that I showed you by the end of the previous lecture.
-so this is what we want to implement in our app now.
-to start we actually need to create those check boxes there.
- and so let's go here to our item. And before the span, let's now add an input of the type...
- but of course it's not going to do anything.
- soo basically we want to also transform this element right here into a controlled element.
- and remember, a controlled element means that the element has the value defined by some state and it also has an event handler which listens for the change and updates the state accordingly.
- so let's do those two things. And first, the value will be given by the item.checked status. And so this checked here is always a true or false value.

And so that is exactly the type of value that we need to pass into the value of a checkbox. And actually here it should be packed and not checked which maybe you had already noticed.

But anyway, now let's keep going here. And so now next up we need to add on change handler.

So we need to listen for the change event, which basically happens

each time that we click here on the checkbox.

Now here for now,

let's actually specify just an empty function.

So a function that doesn't do anything.

And here we're missing this.

All right.

And so the reason for that is that of course

this function here

that we are eventually going to specify here

is going to change the packed value of the item state.

And so that function will once again be placed

where the state actually lives, so inside of app.

And then we will pass it down using a prop

just like we did with on delete item.

So this is something similar.

So instead of deleting an item,

we will simply now update one item.

And so again, that update happens

each time that we click here on the checkbox.

So let's now write that function here.

So function, and again, starting with the handle keyword,

and then toggle item.

And that's because here

we will only toggle the packed property.

So not allow anyone to update the entire object

but only really to change the value of that packed property.

So in order to know which object we actually need to change

we need to again pass in the ID.

And so then let's again set the items.

And then we need to pass in a new array

which, just like before, will depend on the current array.

So we have our callback function here.

And so now in order

to update one of the objects in the array,

we will simply loop over the entire items array

using the map property

which will then in the end return a brand new array

with the same length of the initial items array.

But one of the objects

will then, of course, have been updated.

So in the iteration, each of the elements is called an item.

And then here is what we're gonna do.

So whenever the item has the ID

that is equal to the ID that we passed in,

so which means that this is the object

that we want to actually update,

then we create a brand new object based on the current item,

and then we set packed to the opposite of packed,

so of item.packed.

And that's it.

And if else, so for all the other objects,

we will simply return the current item.

And just once again,

I want to emphasize that I covered exactly

that this is how we update an object in an array

in great depth, in the section where we review

essential JavaScript for React.

So please go there in case that this looks strange.

But for everyone else, let's just keep going here.

And now also add this function here into the packing list

so that the packing list can then add it into the item.

So we use, once again, the props

basically as a communication channel here.

So on toggle items, handle toggle item.

So on toggle item right here.

And now let's just copy this,

add it here to the list of props, exactly like this.

And then we pass it into the item itself.

Let's do that here.

All right.

And finally we receive it here.

So again, we need to use the packing list here

as an intermediary step in order to reach the item itself.

And so now here we can then replace this empty function

with calling on toggle item

with, just like before, the current ID,

so that we actually know

which is the object that we need to change.

All right and that's actually it,

or at least it should be.

So let's see if that works.

So one socks, let's say one shirt and one charger.

And now as we click here, yeah, beautiful.

So it updates our checkbox

and you see that it also updates here these strikethrough.

So that's coming exactly here from when the item is packed.

And the same of course, works for all the other ones

because if we click on this one

then the item.ID will be another one

and so therefore then this function here

receives another value

which will then update another object.

And the deleting here of course, also works.

And so, we are done with building

these two operations that we can perform on items.

So toggling their packed status and deleting them.

Now before moving on,

please just make sure to review the code that we wrote here.

So just to make sure that you understand, basically,

everything that's happening here,

why we are doing it this way,

and the way we then pass in these functions as props

all the way down

until the components that actually need them.

So this is, again, child-to-parent communication

which is something that we're going to use all the time.

And so make sure that you really understand this concept

as well as lifting up state

until you move on to the next lecture

which is going to be about derived state.