/*
 Delete a Node - Hacker Rank Solution
You’re given the pointer to the head node of a linked list and the position of a node to delete. Delete the node at the given position and return the head node. A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The list may become empty after you delete the node.

Input Format
You have to complete the Node* Delete(Node* head, int position) method which takes two arguments - the head of the linked list and the position of the node to delete. You should NOT read any input from stdin/console. position will always be at least 0 and less than the number of the elements in the list.
Output Format
Delete the node at the given position and return the head of the updated linked list. Do NOT print anything to stdout/console.
Sample Input
1 --> 2 --> 3 --> NULL, position = 0
1 --> NULL , position = 0
Sample Output

2 --> 3 --> NULL
NULL

Explanation
1. 0th position is removed, 1 is deleted from the list.
2. Again 0th position is deleted and we are left with empty list.
-------------------------------------------------------------------------------------------------------------
*/
Solution
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(llist, position) {
     if (llist === null) return null;
    if (position === 0) {
        llist = llist.next;
        return llist;
    }
    let nodeBeforePosition = llist;
    for (let i = 0; i < position - 1; i++) {
        if (nodeBeforePosition.next === null) break;
        nodeBeforePosition = nodeBeforePosition.next;
    }
    if (nodeBeforePosition.next !== null) {
        const nodeAfterPosition = nodeBeforePosition.next.next;
        nodeBeforePosition.next = nodeAfterPosition;
    }
    return llist;

}

function main() {