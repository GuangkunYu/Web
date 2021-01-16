/*
    判断单个字符是否符合数字字母下划线
 */
function isDEF(charStr) {
    return charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z" || charStr >= "0" && charStr <= "9" || charStr === "_";
}

/*
    判断单个字符是否是字母
 */
function isABC(charStr) {
    return charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z";
}

/*
            验证码：验证是否是机器人

                纯数字组成的验证码：非常容易破解    6位数字验证码
                数字和字符组成的验证码：
                    0~9
                    a~z: 97~122
                    A~Z：65~90
                    随机：0~122
                方法：
                    1、生成一个数组，装有单个字符，长度62的数组
                       随机 0~61的下标
                    2、随机ASCII码
         */

// n位验证码    每一个数字的范围 0~9
function numTestCode(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let num = parseInt(String(Math.random() * 10));
        arr.push(num);
    }
    return arr.join("");
}

function testCode(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let num = parseInt(String(Math.random() * 123));
        if (num >= 0 && num <= 9) {
            arr.push(num);
        } else if (num >= 97 && num <= 122 || num >= 65 && num <= 90) {
            arr.push(String.fromCharCode(num));
        } else {
            i--;
        }
    }
    return arr.join("");
}

/*
            选择排序：
                规则：选出一个位置，这个位置上的数，和后面所有的数进行比较，如果比较出大小，就交换两个数位置
                规律：每一轮都能选出一个最小的数，放在正确的位置。
            分析：
                比较的轮数 = 数组长度 -1
                每一轮比较的次数 = 数组长度 - 当前的轮数
        */
function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

/*
            冒泡排序：
                规则：前后两个数两两进行比较，如果复合交换条件就交换两个数位置
                规律：冒泡排序每一轮排序，都可以找出一个较大的数，放在正确的位置
                分析：
                    比较轮数 =  数组长度 - 1
                    每一轮比较的次数 = 数组长度 - 当前的轮数
        */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}