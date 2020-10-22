import mongodb, { Timestamp } from 'mongodb'

export type CustomerType = {
  first_name: string
	last_name: string
	age: number
	customer_type: string
	street: string
	city: string
	state: string
	zip_code: string
	phone_number: string
}

export type AccountType = {
  customer_id: mongodb.ObjectID
	account_number: string
	balance: number
	account_type: string
}

export type TransactionType = {
  account_id: mongodb.ObjectID
	amount: number
	date: {type: Timestamp, required:true}
	description: Text
}

//customer
export class Customer {
  private collection: mongodb.Collection<CustomerType>

  constructor(db: mongodb.Db) {
    this.collection = db.collection('customer')
  }

  async create(data: CustomerType) {
    try {
      const result = await this.collection.insertOne(data)
      console.log('Insert result %j', result)
    } catch (error) {
      throw error
    }
  }

  async getAll() {
    let customers: CustomerType[]
    try {
      customers = await this.collection.find().toArray()
    } catch (error) {
      throw error
    }

    return customers
  }

  async getByID(customerID: string) {
    let customer: CustomerType | null
    try {
      customer = await this.collection.findOne({ _id: new mongodb.ObjectID(customerID) })
    } catch (error) {
      throw error
    }

    return customer
  }

  async update(customerID: string, updateData: Partial<CustomerType>) {
    try {
      await this.collection.updateOne({ _id: new mongodb.ObjectID(customerID) }, { $set: updateData })
    } catch (error) {
      throw error
    }
  }


  async delete(customerID: string) {
    try {
      await this.collection.deleteOne({ _id: new mongodb.ObjectID(customerID) })
    } catch (error) {
      throw error
    }
  }
}

//account
export class Account {
  private collection: mongodb.Collection<AccountType>

  constructor(db: mongodb.Db) {
    this.collection = db.collection('account')
  }

  async create(data: AccountType) {
    try {
      const result = await this.collection.insertOne(data)
      console.log('Insert result %j', result)
    } catch (error) {
      throw error
    }
  }

  async getAll() {
    let accounts: AccountType[]
    try {
      accounts = await this.collection.find().toArray()
    } catch (error) {
      throw error
    }

    return accounts
  }

  async getByID(accountID: string) {
    let account: AccountType | null
    try {
      account = await this.collection.findOne({ _id: new mongodb.ObjectID(accountID) })
    } catch (error) {
      throw error
    }

    return account
  }

  async update(accountID: string, updateData: Partial<AccountType>) {
    try {
      await this.collection.updateOne({ _id: new mongodb.ObjectID(accountID) }, { $set: updateData })
    } catch (error) {
      throw error
    }
  }


  async delete(accountID: string) {
    try {
      await this.collection.deleteOne({ _id: new mongodb.ObjectID(accountID) })
    } catch (error) {
      throw error
    }
  }
}


//transaction
export class Transaction {
  private collection: mongodb.Collection<TransactionType>

  constructor(db: mongodb.Db) {
    this.collection = db.collection('transaction')
  }

  async create(data: TransactionType) {
    try {
      const result = await this.collection.insertOne(data)
      console.log('Insert result %j', result)
    } catch (error) {
      throw error
    }
  }

  async getAll() {
    let transaction: TransactionType[]
    try {
      transaction = await this.collection.find().toArray()
    } catch (error) {
      throw error
    }

    return transaction
  }

  async getByID(transactionID: string) {
    let transaction: TransactionType | null
    try {
      transaction = await this.collection.findOne({ _id: new mongodb.ObjectID(transactionID) })
    } catch (error) {
      throw error
    }

    return transaction
  }

  async update(transactionID: string, updateData: Partial<TransactionType>) {
    try {
      await this.collection.updateOne({ _id: new mongodb.ObjectID(transactionID) }, { $set: updateData })
    } catch (error) {
      throw error
    }
  }


  async delete(transactionID: string) {
    try {
      await this.collection.deleteOne({ _id: new mongodb.ObjectID(transactionID) })
    } catch (error) {
      throw error
    }
  }
}