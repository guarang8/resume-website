    raise params[:name].inspect
    require 'pony'
    Pony.mail(
      :from => params[:name] + "<" + params[:email] + ">",
      :to => 'manish_gauranga@yahoo.com',
      :subject => params[:name] + " has contacted you",
      :body => params[:message],
      :port => '587',
      :via => :smtp,
      :via_options => {
        :address              => 'smtp.gmail.com',
        :port                 => '587',
        :enable_starttls_auto => true,
        :user_name            => 'manish.gauranga',
        :password             => 'hare$krishna711889',
        :authentication       => :plain,
        :domain               => 'localhost.localdomain'
      })

