import socket
import time

FRONTEND_DIR = "../frontend"

def request_handler(request):

    headers = request.split("\n")
    request_type, requested_path, http = headers[0].split()

    if request_type == "POST":
        content_length = 0
        for header in headers:
            if "Content-Length" in header:
                content_length = int(header.split(":")[1])
                break

        if content_length > 0:
            body = headers[-1]
            data = body[:content_length]

            # pozvati funkciju za obradu iz odgovarajuce skripte

            return "HTTP/1.1 200 OK\n\nPOST request successfully processed\n"    
    elif request_type == "GET":
        if requested_path == "/":
            requested_path = "/index.html"

        if requested_path == "/favicon.ico":
            return ""

        try:
            file = open(FRONTEND_DIR + requested_path)
            file_content = file.read()
            file.close()

            response = "HTTP/1.1 200 OK\n\n" + file_content
        except FileNotFoundError:
            response = "HTTP/1.1 404 Not Found\n\nRequested web page not found\n"

        return response

def main():
    SERVER_HOST = "127.0.0.1"
    server_port = 8000

    connection_exception = ""

    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    
    while connection_exception != None:
        try:
            server_socket.bind((SERVER_HOST, server_port))
            connection_exception = None
        except Exception as exc:
            connection_exception = exc
            
            if "[Errno 98] Address already in use" in str(exc):
                print(f"Port {server_port} already taken.")
                server_port += 1
                print(f"Trying port {server_port}...")
        time.sleep(1)
            
    server_socket.listen()

    print(f"Server is listening on IP address and port: {SERVER_HOST}:{server_port}")

    while True:
        try:
            client_socket, client_address = server_socket.accept()
            print(f"Connected to: {client_address}")

            request = client_socket.recv(4096).decode("utf-8") # mozda maknuti utf-8 zbog slika
            print(request)

            response = request_handler(request)
            client_socket.sendall(response.encode()) # mozda ce olaksati slanje slika

            client_socket.close()

        except Exception as exc:
            print(exc)
            break

    server_socket.close()

if __name__ == "__main__":
    main()
