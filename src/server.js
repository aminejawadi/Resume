
app.use(express.static('./dist/live-resume.json'));

app.get('/*',function (req,res){
  res.sendfile('index.html',{root:'dist/live-resume.json/'});


});
app.listen(process.env.PORT || 8080);
