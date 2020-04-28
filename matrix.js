class Matrix{

    constructor(rows, cols) {
        this.rows = rows
        this.cols = cols
        this.data = []
        

        for (let i = 0; i < this.rows; i++) {
            this.data[i] = []
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0
            }
        }
    }

    static fromArray(arr){
        let m = new Matrix(arr.length, 1)
        for (let i = 0; i < arr.length; i++) {
            m.data[i][0] = arr[i]
        }
        return m
    }

    toArray(){
        let arr = []
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                arr.push(this.data[i][j])
            }
        }
        return arr
    }

    randomize(){
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] += Math.random() * 2 - 1
            }
        }
    }

    static subtract(m1, m2){
        let m3 = new Matrix(m1.rows, m1.cols)
        for (let i = 0; i < m1.rows; i++) {
            for (let j = 0; j < m1.cols; j++) {
                m3.data[i][j] =  m1.data[i][j] - m2.data[i][j]
            }
        }
        return m3
    }

    add(n) {
        if(n instanceof Matrix){
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] +=  n.data[i][j]
                }
            }
        }else{
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n
                }
            }
        }
    }
    

    static transpose(m1){
        let result = new Matrix(m1.cols, m1.rows)
        for (let i = 0; i < m1.rows; i++) {
            for (let j = 0; j < m1.cols; j++) {
                result.data[j][i] = m1.data[i][j]
            }
        }
        return result
    }



    static multiply(a, b){
        if(a.cols !== b.rows){
            return undefined
        }
        let result = new Matrix(a.rows, b.cols)
        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.cols; j++) {
                let sum = 0
                for (let k = 0; k < a.cols; k++) {
                    sum += a.data[i][k] * b.data[k][j]
                }
                result.data[i][j] = sum
            }
        }
        return result
    }

    multiply(n) {
        if(n instanceof Matrix){
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] *=  n.data[i][j]
                }
            }
        }else{
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] *= n
                }
            }
        }
    }

    static map(m1, fn){
        let result = new Matrix(m1.rows, m1.cols)
        for (let i = 0; i < m1.rows; i++) {
            for (let j = 0; j < m1.cols; j++) {
                result.data[i][j] = fn(m1.data[i][j])
            }
        }
        return result
    }

    map(fn) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = fn(this.data[i][j])
            }
        }
    }

    print(){
        console.table(this.data)
    }
}
