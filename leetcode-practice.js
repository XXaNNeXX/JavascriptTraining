"use strict";

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if((nums[i] + nums[j]) == target) {
                return [i,j];
            }
        }
    }
};

//console.log(twoSum());


/**Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
Instead, the number four is written as IV. Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.*/

/**
 * @param {string} s
 * @return {number}
 */

const roman = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};

function romanToInt(s) {
    let num = 0;
    for(let i=s.length-1; i>=0; i--) {
        let r = roman[s.charAt(i)];
        if(4*r<num) {
            num -= r;
        }
        else {num += r}
    }
    return num;
};

console.log(romanToInt("MCXLIII"));