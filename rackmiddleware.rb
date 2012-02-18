class RackMiddleware
  def initialize(appl)
    @appl = appl
  end
  def call(env)
    start = Time.now
    status, headers, body = @appl.call(env) # call our Sinatra app
    stop = Time.now
    puts "Response Time: #{stop-start}" # display on console
    [status, headers, body]
  end
end