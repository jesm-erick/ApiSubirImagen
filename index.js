import app from './app.js'
import {connectToDB} from './utils/mongoose.js'

async function  main() {
    await connectToDB()
    app.listen(3000, '192.168.1.9')
    console.log('server is running on port', 3000)
}
main()