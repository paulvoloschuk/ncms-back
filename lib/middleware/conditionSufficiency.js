export default function conditionSufficiency (request, response, next)  {
  console.log(request.method);
  next()
}
