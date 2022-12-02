# REST API

API(Application Programming Interface)는 애플리케이션을 구축하고 통합하기 위한 프로토콜 세트다. API를 사용하면 구현 방식을 알지 못해도 애플리케이션끼리 서로 커뮤니케이션할 수 있으며, 애플리케이션 개발을 간소화하여 시간과 비용을 절약할 수 있다.

REST(Representational State Transfer)는 자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것을 의미한다. 여기서 상태는 전송되는 데이터라고 할 수 있으며, 일반적으로 JSON 형태로 데이터를 주고받는다. REST는 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 사용하기 때문에 웹의 장점을 최대한 활용할 수 있는 아키텍처이고, 네트워크 상에서 클라이언트와 서버 사이의 데이터를 통신하기 위해 가장 많이 사용되는 통신 방식 중 하나이다.

REST는 HTTP URI(Uniform Resource Identifier)를 통해 자원을 명시하고 HTTP Method(POST, GET, PUT DELETE)를 통해 해당 자원에 대한 CURD를 수행하게 된다. 여기서 CRUD란 Create(생성), Read(조회), Update(수정), Delete(삭제)를 말한다.

웹에서는 일반적으로 서버에 구현해 놓은 REST API를 클라이언트가 호출해서 데이터 전송, 조회, 수정, 삭제 같은 기능을 서버에 요청할 수 있게 해준다.

HTTP + JSON 형태로 REST API를 정의하면 플랫폼과 언어에 종속 받지 않아 HTTP와 JSON을 사용할 수 있는 모든 플랫폼에서 사용 가능하다.
