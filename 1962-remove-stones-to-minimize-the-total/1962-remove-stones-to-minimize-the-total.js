/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    let sum = 0;
	// init a max heap
    const stones = new Heap((a, b) => {
        return a < b ? 1 : a > b ? -1 : 0;
    })
    // trun the piles from an array into a heap
    stones.heapify(piles);
    //calculate sum
    for (let pile of piles) {
        sum += pile;
    }
	//k times operation
    for(let i = 0; i < k; i++) {        
		// get max, discard half, and put the rest back
        let curMax = stones.pop();
        sum -= Math.floor(curMax/2);
        stones.push(Math.ceil(curMax/2));
    }
    // answer
    return sum;
};


/**
 start of the Heap class
 JS does not have heap, so we have to write it by ourselves
 */

class Heap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
        this.size = this.heap.length;
    }
	heapify(array) {
        this.heap = array;
        // bottom up
        for(let i = Math.floor(this.heap.length / 2); i >= 0; i--){
            this._siftdown(i);
        }
    }
    push(item) {
        this.heap.push(item);
        this._siftup(this.heap.length - 1);
    }
    
    pop() {
        if (this.heap.length === 0) {
            return undefined;
        }
        this._swap(0, this.heap.length - 1);
        let item = this.heap.pop();
        if (this.heap.length >= 1) {
            this._siftdown(0);
        }
        return item;
    }
    top() {
        return this.heap[0]
    }
    
    _swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    
    _siftup(index) {
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[parentIdx], this.heap[index]) === 1) {
                this._swap(parentIdx, index);
                index = parentIdx;
            } else {
                break;
            }
        }
    }
    
    _siftdown(index) {
        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;           
            let minIndex = index;
            
            if (left < this.heap.length && this.compare(this.heap[index], this.heap[left]) === 1) {
                minIndex = left;
            }
            
            if (right < this.heap.length && this.compare(this.heap[minIndex], this.heap[right]) === 1) {
                minIndex = right;
            }
            
            if (minIndex === index) {
                break;
            }
            
            this._swap(index, minIndex);
            index = minIndex;
        }
    }
}