/* 
তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 

এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

Input: ‘Phero’
Output: odd

Input: ‘Batch7’
Output: even

Input: ‘chatgpt’
Output: odd 
*/

function evenOdd(text){
    if(text.length % 2 == 0){
        console.log('even');
    }
    else{
        console.log('odd')
    }
    return;
}
evenOdd('Phero');