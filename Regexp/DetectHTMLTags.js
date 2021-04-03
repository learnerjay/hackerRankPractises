/*
    Problem Statement

    In this problem you will use regular expressions to help you detect the various Tags used in an HTML document.

    Here are a few examples of tags:

    The "p" tag for paragraphs:

    <p>This is a paragraph</p>  

    It is also okay to have one or more spaces before or after the tag name:

    <  p >This is also a paragraph</p>

    Then, there is also something called a void or an empty tag such as:

    <p></p>

    Some tags can also have attributes. For example, here we see the "a" tag which is used for adding links to a document.

    [Google](http://www.google.com)

    In the above case, "a" is the tag and "href" is an attribute, the value of which is http://www.google.com. Ignore any attributes. Your task is to find out all the tags present in the given document.

    There are also tags such as this which haven't been split into an opening and closing tag (i.e, self-closing tags): '< p/>'

    Input Format

    The first line will contain N, the number of lines in the fragment. A valid HTML document or fragment.Leading and trailing spaces and indentation will be removed from the HTML lines.

    Output Format

    A list of all the tags present in the document, in lexicographical order, with semi-colons ";" between them. If a tag occurs multiple times, you just need to list it out once.

    Sample Input

    2
    <p>[Example Link](http://www.quackit.com/html/tutorial/html_links.cfm)</p> <div> class="more-info">[More Link Examples...](http://www.quackit.com/html/examples/html_links_examples.cfm)</div>

    Sample Output

    a;div;p
*/
Solution
function processData(input) {
   console.log([...new Set(input.match(/(?<=<)\w+/g).sort())].join(';'));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

