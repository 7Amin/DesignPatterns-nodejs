class IWebRequester { // target interface
    request(object) {
        throw new Error('You have to implement the method doSomething!');
    }
}

class WebService { // adaptee
    constructor(host) {
        this.host = host;
    }
}

class WebAdapter extends IWebRequester {
    constructor() {
        this.service = new WebService('localhost'); // wrap adaptee by adapter
    }

    connect(currentService) {
        this.service = currentService;
    }

    request(request) {
        jsonRequest = this.toJson(request);
        response = this.service.request(jsonRequest);
        if (response)
            return 200;
        return 500;
    };

    toJson(input) {
        return JSON.stringify(input);
    };
}


class WebClient {
    constructor(webRequester) {
        this.webRequester = webRequester;
    }

    makeObject(){
        return {
            'object1': 1,
            'object2': 2,
        };
    }

    doWork() {
        object = this.makeObject();
        status = this.webRequester.request(object);
        return status;
    }
}


class Program {
    static main() {
        host = 'localhost';
        service = new WebService(host);
        adapter = new WebAdapter();
        adapter.connect(service);
        client = new WebClient(adapter);
        client.doWork();
    }
}
