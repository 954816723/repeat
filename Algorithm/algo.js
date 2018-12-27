class Algo {
    constructor() {

    }
    // 冒泡排序
    bubleSort(arr) {
        let len = arr.length;
        for (let outer = len; outer >= 2; outer--) {
            for (let inner = 0; inner < outer - 1; inner++) {
                if (arr[inner] > arr[inner + 1]) {
                    // let temp = arr[inner];
                    // arr[inner] = arr[inner + 1];
                    // arr[inner + 1] = temp;
                    // temp = null;
                    [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]]
                }
            }
        }
        return arr;
    }
    // 选择排序
    // 选择第一个,依次比较,最小的放第一个,接着从第二个开始...
    selectSort(arr) {
        let len = arr.length;
        for (let outer = 0; outer < len - 1; outer++) {
            for (let inner = outer; inner < len; inner++) {
                if (arr[outer] > arr[inner]) {
                    [arr[outer], arr[inner]] = [arr[inner], arr[outer]]
                }
            }
        }
        return arr;
    }
    // 插入排序
    insertSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
                } else {
                    break;
                }
            }
        }
        return arr;
    }
    // 快速排序
    quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        let left = [],
            right = [],
            current = arr.splice(0, 1);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < current) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return this.quickSort(left).concat(current, this.quickSort(right))
    }
    // 希尔排序
    shellSort(arr, gap) {
        // console.log(arr) //为了方便观察过程，使用时去除
        for (let i = 0; i < gap.length; i++) { //最外层循环，一次取不同的步长，步长需要预先给出
            let n = gap[i]; //步长为n
            for (let j = i + n; j < arr.length; j++) { //接下类和插入排序一样，j循环依次取后面的数
                
                for (let k = j; k > 0; k -= n) { //k循环进行比较，和直接插入的唯一区别是1变为了n
                    console.log(k-n);
                    if (arr[k] < arr[k - n]) {
                        [arr[k], arr[k - n]] = [arr[k - n], arr[k]];
                        // console.log(`当前序列为[${arr}] \n 交换了${arr[k]}和${arr[k - n]}`) //为了观察过程
                    } else {
                        continue;
                    }
                }
            }
        }
        return arr;
    }
    // partition(arr, low, high) {
    //     let first = arr[low];
    //     while (low < high) {
    //         while ((arr[high] >= first) && (low < high)) high--;
    //         if (low < high) arr[low++] = arr[high];
    //         while (arr[low] < first && (low < high)) low++;
    //         if (low < high) arr[high--] = arr[low];
    //     }
    //     arr[low] = first;
    //     return low;
    // }
    // QSort(arr, s, t) {
    //     console.log(arguments);
        
    //     if (s < t) {
    //         let i = this.partition(arr, s, t);
    //         this.QSort(arr, s, i - 1);
    //         this.QSort(arr, i + 1, t);
    //     } else {
    //         return;
    //     }
    // }

}