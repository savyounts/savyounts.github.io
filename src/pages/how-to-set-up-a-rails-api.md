---
title: "How To Set Up a Rails API"
date: "2019-01-15"
---

Like I mentioned in my previous blog,

> An API (Application Programming Interface) is a way for one system to interact with another via a well-defined interface.

RubyOnRails is known for rapid development of web apps. Following the current trends, integrating a frontend framework has become challenging and even time consuming .

In fact, modern web app architecture nowadays consist of a client app that consumes a JSON API. Indeed, Rails 5 introduced the api mode ; A bootstrapped skeleton for api only apps.

We're going to quickly go through how to set up a Rails API app that does a lot of work for you so you won't need to spend as much time trying to configure all of the details.

**Step 1: Create Rails API Skeleton**

In your terminal type:

```
rails new [api_name]  — api
```

If you want to set a specific database type or test suite, you can use the -d and -T flags. Otherwise your default with be a sqlite3 database and Minitest testing suite.

```
rails new library --api -d mysql -T
```

Step 2: Installing Rspec

If you decided you want to use RSpec instead of Minitest, you will need to install RSpec by adding it to your Gemfile on the development/test group:

```
group :development, :test do
  gem 'rspec-rails', '~> 3.6'
end
```

Once this has been added, run `bundle install`. When the bundle has finished, run `rails generate rspec:install` to create all of the Rspec folders and files.

Step 3: Versioning

We want to access our api via /api/v1 url, so first let's create the missing folders:

```
mkdir app/controllers/api
mkdir app/controllers/api/v1
```

Step 4: Creating Models

Now that we have our initial API app set up, most things from here work like a normal Rails app.

Create a model using a generator:

```
rails g scaffold Article title:string content:text slug:string
rails db:migrate
```

Rails has now created the model, the migration and the spec for us. We have also gone ahead and migrated to create our articles table.

Step 5: Move resource controller to its respective folder

```
mv app/controllers/articles_controller.rb app/controllers/api/v1
```

Now we need to add the namespaces prior to the class name and update the url helper in the create methods which should en dup looking like this:

```
class Api::V1::ArticlesController < ApplicationController

  before_action :set_article, only: [:show, :update, :destroy]

  # GET /articles
  def index
   @articles = Article.all
   render json: @articles
  end

  # GET /articles/1
  def show
   render json: @article
  end

  # POST /articles
  def create
   @article = Article.new(article_params)
   if @article.save
    render json: @article, status: :created, location:        api_v1_article_url(@article)
   else
    render json: @article.errors, status: :unprocessable_entity
   end
  end

  # PATCH/PUT /articles/1
  def update
   if @article.update(article_params)
    render json: @article
   else
    render json: @article.errors, status: :unprocessable_entity
   end
  end

 # DELETE /articles/1
  def destroy
   @article.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_article
   @article = Article.find(params[:id])
  end

  # Only allow a trusted parameter “white list” through.
  def article_params
  params.require(:article).permit(:title, :content, :slug)
  end
  end
```

Step 6: Update route file

Open up the routes.rb file and delete the resource line:

```
resources :articles

```

Then add the namespaces, your final route should look like this:

```
Rails.application.routes.draw do
 namespace :api do
  namespace :v1 do
   resources :articles
  end
 end

end
```

Step 7: Rinse and Repeat

You can repeat steps 4-6 to create as many resources that you want!
