// Given two strings s and t, return true if t is an 
// anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
// Problem: Valid Anagram using Array.fill()

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    const count = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++; // Increment for characters in s
        count[t.charCodeAt(i) - 97]--; // Decrement for characters in t
    }
    
    return count.every(val => val === 0); // Check if all counts are zero
}
