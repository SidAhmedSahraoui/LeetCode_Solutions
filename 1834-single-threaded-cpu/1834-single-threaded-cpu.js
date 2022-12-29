/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    // time used by cpu sofar
    let time = 1;
   
    // util. function for comparing two tasks; first by processing time; and if equal index
    let cmp = (a, b) => (b.proc - a.proc) || (b.indx - a.indx);
    
    // turn into nice map
    tasks = tasks.map ((e, i) => ({enqd: e[0], proc: e[1], indx: i}));
    
    // sort by enqueued time
    tasks = tasks.sort((a, b) => b.enqd - a.enqd);
       
    // priority queue
    q = []
    
    // heapify function for restoring heap property
    let heapify = (i) => {
        let j = i;
        
        if (i * 2 - 1 < q.length && (cmp(q[i - 1], q[i * 2 - 1]    ) < 0)) 
            j = i * 2;
        
        if (i * 2     < q.length && (cmp(q[j - 1], q[i * 2    ]    ) < 0)) 
            j = i * 2 + 1;
        
        if (i == j)
            return;
        
        [q[i - 1], q[j - 1]] = [q[j - 1], q[i - 1]]
        heapify(j);
    }
    
    // insert element into pq
    let pqadd = function(e) {
        let p = q.length + 1;
        let r = Math.floor(p / 2);
        
        // insert element in last pos.
        q.push(e);

        // move elem. up into proper position
        while (p > 1) {
            if (cmp(q[r - 1], q[p - 1]) >= 0) break;
            
            heapify(r)

            p = r;
            r = Math.floor(p / 2);
        }
    }
    
    // result array
    let res = [];
    
    // tmp
    let p;
    
    while (tasks.length || q.length) {
        // if elements in queue 
        if (q.length) {
            // pop. min element
            [q[0], q[q.length - 1]] = [q[q.length - 1], q[0]]
            p = q.pop();
            
            res.push(p.indx);
        
            // fix heap
            heapify(1);
            
            // adjust time spent by cpu
            time += p.proc;
        } else {
            // no element in queue so wait until time of elem. with 
            // lowest enqueued time
            time = tasks[tasks.length - 1].enqd;
        }

        // add elements ready to be processed to queue
        while (tasks.length && tasks[tasks.length - 1].enqd <= time) {
            let t = tasks.pop();
            pqadd(t);
        }
    }
        
    // done
    return res;
};