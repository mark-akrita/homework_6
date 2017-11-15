const diamond = function(height, str) {
  const line = function (str,num) {
    if (num <= 0) {
      return '';
    };
    return str + line(str,num-1);
  };
  const raw = function(height,num) {
    if (height <= 0) {
      return '';
    } else if (height < num) {
      console.log(line(' ', num) + line(str,height*2-1));   //using recursion
      return raw((height - 1), num + 1);
    };
    console.log(line(' ', height) + line(str,num*2-1));
    return raw((height - 1), num + 1);
  };
  console.log(raw(height,1));
};
diamond(15, '%');


const diamondLoop = function(height, str) {
    for (let row = 1; row <= height; row++) {
        
      const line = function (height, row) {
        if (height/2 +1 < row) {
          return height - row +1;                     //using for loop
        }
        return row;
      };
        
        console.log(' '.repeat((height - (line(height,row) * 2 - 1) / 2)) + str.repeat(line(height,row) * 2 - 1));
    };
};
diamondLoop(7, '@');