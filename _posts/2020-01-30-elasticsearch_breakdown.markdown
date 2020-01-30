---
layout: post
title:      "Elasticsearch Breakdown"
date:       2020-01-30 23:23:43 +0000
permalink:  elasticsearch_breakdown
---


Elasticsearch is a distributed search and analytics engine for all types of data. It is known for its speed and scalability, as well as its ability to index many types of content which make it a great solution for things such as application search, website search, application performance monitoring, security analytics and more. 

Data is first ingested by Elasticsearch which means that it is first parsed, normalized and enriched before being indexed. Once indexed, users can run complex queries and use aggregations against the data. Indices are collections of documents that are related to each other, this data is stored as JSON documents with each field containing a key with its corresponding value. 

Elasticsearch is distributed and scales horizontally. Indices are stored inside a "node", which is what we call a single instace of Elasticsearch. A "cluster" is a collection of Elasticsearch nodes and it can grow as your needs grow. 

## Configuration
Elasticsearch has three main configuration files
* elasticsearch.yml
* jvm.options
* log4j2.properties

Elasticsearch.yml contains all of the default settings for a node, but has them all commented out. To set custom settings, uncomment the line and adjust how you need to. Save the file and restart your node for it to take effect. 

## Start
To start elasticsearch, use this command in your command line. 
```
$ ./bin/elasticsearch
```

## Nodes
Every node has a uniqe ID and it has a name. You can set the name using node.name in the yml file. You can also set the cluster name which will determine which cluster the node should belong to. If there is not currently a cluster with that name, it will create a new one. 

## Documents 
You can upload a document usign POST or PUT and you can choose whether or not to give it an ID. If you don't assign an ID, one will be generated for it when it is added to the index. Like clusters, if you are indexing a document into an non-existing index, the index is created automatically. 
If you index a document using an ID that already exists, it overwrites the existing document. If you do NOT want a document to be overwritten if it already exists, use the create endpoint. 
```
PUT my_index/_create/1
```
vs
```
PUT my_index/_doc/1
```

## Search
There are two main ways to search through your data: 
Queries
Aggregations

Queries filter out data to match the information you need. Aggregations summarize that data. For both, you will use the search endpoint. 

```
GET my_index/_search
{
     "query": {
		      "match-all": {}
		},
		"aggs": {
		     "my_agg":{
				      "terms": {
							     "field": "author"
							}
				}
	 }
}	
```

Queries returns an array of "hits" which are the documents that hit the search criteria. Aggregations return "buckets" which is an array of documents that share common criteria.  

A score is a value representing how relevant the document in regards to a specific query and is computed for each document that is a hit. 

To combine searches you can use the bool query. The bool query has four optoinal clauses you can use to properly search for the correct information: "must", "must-not", "should" and "filter". 

Aggregations can also be a combination of bucket and metric aggregations. 


