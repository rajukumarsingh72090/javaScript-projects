// sort method will sort function in ascending order according to ASCII
// ASCII (American standard code for information interchange)

const numForSort = [123,34,5456,456,54,23,14643]
// numForSort.sort()

// to get the value in acending order according to the number
// a - b if result is lower than zero show ouput 
// a - b if result is greater than zero it will change to b - a

// numForSort.sort((ascc,bscc) => ascc - bscc)
// console.log(numForSort)

// to get the value in decending number we neet to write b - a

numForSort.sort((ascc,bscc) => bscc - ascc)
console.log(numForSort)

const userName = ["raju", "sanjeev", "Ram", "Maniratnam"]
userName.sort()
console.log(userName)

// exampe 
const product = [
    {prId: "1", prName: "samsung", price: 12000},
    {prId: "2", prName: "lava",    price: 11000},
    {prId: "3", prName: "vivo",    price: 18000},
    {prId: "4", prName: "oppo",    price: 15000}
]
// low to high
// product.sort((low, high) => {
//     return low.price - high.price
// })

// due to slice (0) prId will be same other value will change
const lowToHigh = product.slice(0).sort((low, high) => {
    return low.price - high.price
})
console.log(lowToHigh)

// hight to low
const highToLow = product.slice(0).sort((low, high) => {
    return high.price - low.price
})
console.log(highToLow)

// hight to low
            
//  index  ASCII       description
//   0     NUL         null                       
//   1     SOH         start of heading              
//   2     STX         start of text                 
//   3     ETX         end of text                     
//   4     EOT         end of transmission            
//   5     ENQ         enquiry                     
//   6     ACK         acknowledge                    
//   7     BEL         bell                         
//   8     BS          backspace                     
//   9     TAB         horizontal tab           
//  10     LF          NL line feed, new line   
//  11     VT          vertical tab            
//  12     FF          NP form feed, new page 
//  13     CR          carriage return         
//  14     SO          shift out        
//  15     SI          shift in             
//  16     DLE         data link escape    
//  17     DC1         device control 1    
//  18     DC2         device control 2      
//  19     DC3         device control 3    
//  20     DC4         device control 4        
//  21     NAK         negative acknowledge   
//  22     SYN         synchronous idle     
//  23     ETB         end of trans. block    
//  24     CAN         cancel                 
//  25     EM          end of medium          
//  26     SUB         substitute          
//  27     ESC         escape                  
//  28     FS          file separator        
//  29     GS          group separator         
//  30     RS          record separator        
//  31     US          unit separator          
//  32     SPACE       leave space


//  33     !	       exclamation mark
//  34     "	       quotation mark
//  35     #	       number sign
//  36     $	       dollar sign
//  37     %	       percent sign
//  38     &	       ampersand
//  39     '	       apostrophe
//  40     (	       left parenthesis
//  41     )	       right parenthesis
//  42     *	       asterisk
//  43     +	       plus sign
//  44     ,	       comma
//  45     -	       hyphen
//  46     .	       period
//  47     /	       slash


//  48     0	       digit 0
//  49     1	       digit 1
//  50     2	       digit 2
//  51     3	       digit 3
//  52     4	       digit 4
//  53     5	       digit 5
//  54     6	       digit 6
//  55     7	       digit 7
//  56     8	       digit 8
//  57     9	       digit 9


//  58     :	       colon
//  59     ;	       semicolon
//  60     <	       less-than
//  61     =	       equals-to
//  62     >	       greater-than
//  63     ?	       question mark
//  64     @	       at sign


//  65     A	       uppercase A
//  66     B	       uppercase B
//  67     C	       uppercase C
//  68     D	       uppercase D
//  69     E	       uppercase E
//  70     F	       uppercase F
//  71     G	       uppercase G
//  72     H	       uppercase H
//  73     I	       uppercase I
//  74     J	       uppercase J
//  75     K	       uppercase K
//  76     L	       uppercase L
//  77     M	       uppercase M
//  78     N	       uppercase N
//  79     O	       uppercase O
//  80     P	       uppercase P
//  81     Q	       uppercase Q
//  82     R	       uppercase R
//  83     S	       uppercase S
//  84     T	       uppercase T
//  85     U	       uppercase U
//  86     V	       uppercase V
//  87     W	       uppercase W
//  88     X	       uppercase X
//  89     Y	       uppercase Y
//  90     Z	       uppercase Z


//  91     [	       left square bracket
//  92     \	       backslash
//  93     ]	       right square bracket
//  94     ^	       caret
//  95     _	       underscore
//  96     `	       grave accent


//  97     a	       lowercase a
//  98     b	       lowercase b
//  99     c	       lowercase c
//  100    d	       lowercase d
//  101    e	       lowercase e
//  102    f	       lowercase f
//  103    g	       lowercase g
//  104    h	       lowercase h
//  105    i	       lowercase i
//  106    j	       lowercase j
//  107    k	       lowercase k
//  108    l	       lowercase l
//  109    m	       lowercase m
//  110    n	       lowercase n
//  111    o	       lowercase o
//  112    p	       lowercase p
//  113    q	       lowercase q
//  114    r	       lowercase r
//  115    s	       lowercase s
//  116    t	       lowercase t
//  117    u	       lowercase u
//  118    v	       lowercase v
//  119    w	       lowercase w
//  120    x	       lowercase x
//  121    y	       lowercase y
//  122    z	       lowercase z


//  123    {	       left curly brace
//  124    |	       vertical bar
//  125    }	       right curly brace
//  126    ~	       tilde
// 	127    DEL	       delete (rubout)