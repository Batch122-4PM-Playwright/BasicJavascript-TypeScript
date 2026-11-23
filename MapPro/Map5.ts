let V = new Map();

V.set(12, "Hello")
V.set(3452, -336452);
V.set(null, true)
V.set(false, "Yes")
V.set("Tiger", true)
V.set(4541, -252);
V.set(111, 111);
V.set(false, "Movie")
V.set("Parrot", "Bird")


console.log("Before Deleing one key , the total elements in the giiven map is : " +V.size)

V.delete("Tiger")
console.log("After Deleing one key , the total elements in the giiven map is : " +V.size)

