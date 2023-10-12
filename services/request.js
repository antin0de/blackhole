const requests = [];

class RequestService {
  createRequest(request) {
    requests.push(request);
  }

  listRequests() {
    return requests;
  }
}

module.exports.RequestService = RequestService;
module.exports.requestService = new RequestService();
