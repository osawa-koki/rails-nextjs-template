FROM ruby:3.1.3
RUN apt update -qq && apt install -y postgresql-client
WORKDIR /myapp
COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]