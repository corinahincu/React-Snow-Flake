how it was:
                 props
Flake              |
   \               v
+--+---------({size,color})-----------+
|                  |                  |
|          style = {...}              |
|                  |                  |
|                  v                  |
|         <div style = {...}>         |
|         </div>                      |
|                                     |
|                  |                  |
+------------------v------------------+

after some changes in code :

                 props
Flake              |
   \               v
+--+---({size,color, top, left})------+
|                  |                  |
|          style = {...}              |  loose coupling: obj->styles
|                  |                  |      v
|                  + ------------------------------+
|                                                  |
|                                                  v
|                                             css vars
|                                                  |
|                  + ------------------------------+                 
|                  v                  |
|         <div style = {...}>         |
|         </div>                      |
|                                     |
|                  |                  |
+------------------v------------------+