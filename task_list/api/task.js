import {ListTablesCommand,DynamoDBClient} from '@aws-sdk/client-dynamodb';

import {
    UpdateCommand,
    PutCommand,
    DynamoDBDocumentClient,
    ScanCommand,
    DeleteCommand
} from '@aws-sdk/lib-dynamodb'

import crypto from crypto

const client = new DynamoDBClient({region:'us-west-1'});
const docClient=DynamoDBDocumentClient.from(client);

export const fetchTasks=async()=>{
    const command=new ScanCommand({
    ExpressionAttributeNames:{"#name":"name"},
	ProjectionExpression:"id,name,completed",
	TableName:"Tasks"});

const response = await docClient(command);
return response;
}

export const createTasks=async({name,completed})=>{
    const uuid= crypto.randomUUID()
    const command=new PutCommand({
        TableName:"Tasks",
        Item:{
            id:uuid,
            name:name,
            completed:completed
        }
    })
    const response = await docClient(command);
    return response;
}

export const updateTasks=async({id,name,completed})=>{
    const command=new
}

export const deleteTasks=async()=>{
    const command=new
}


