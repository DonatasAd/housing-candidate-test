### Chain reduction

Imagine yourself working in chemistry laboratory.

One day a colleague comes to you with some data he collected from his experiments. He recorded a `polymer` sequence. This polymer is formed by smaller units, which, when triggered, react with each other in such way that two adjacent units of the same type and polarity are react together and being destroyed. These `units` are represented by letters, and `polarity` is represented by capitalization. E.g. `s` and `S` are units of a same type, but opposite polarity, whereas `a` and `c` are entirely different types and do not react.

For example:
- In `uU` `u` and `U` react, leaving nothing behind.
- In `urRU` `rR` destroys itself, leaving `uU`. As above, this then destroys itself, leaving nothing.
- In `uuRU`, no two adjacent units are of the same type, therefore nothing happens.
- In `uuRUUR`,  even though `UU` are of the same type, their polarities match, therefore nothing happens.

Now, consider a larger example, `ebcBdDbDCBdDdbEB`
```
ebcBdDbDCBdDdbEB    - The first dD is removed.
ebcBbDCBdDdbEB      - This creates Bb, which is removed.
ebcDCBdDdbEB        - Either dD or Dd are removed (the result is the same).
ebcDCBdbEB          - No further reductions can be taken.
```

After all possible reductions, the resulting polymer contains 10 units.

**How many units remain after fully reacting the polymer in the provided sequence? (input.txt) - 9348**
