import socket

FRONTEND_DIR = "../frontend"

def request_handler(request):

    headers = request.split("\n")
    request_type, requested_path, http = headers[0].split()

    if requested_path == "/":
        requested_path = "/index.html"

    if requested_path == "/favicon.ico":
        return ""

    file = open(FRONTEND_DIR + requested_path)
    file_content = file.read()
    file.close()

    response = "HTTP/1.1 200 OK\n\n" + file_content

    return response

def main():
    SERVER_HOST = "127.0.0.1"
    SERVER_PORT = 8000

    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind((SERVER_HOST, SERVER_PORT))
    server_socket.listen()

    print(f"Server is listening on IP address and port: {SERVER_HOST}:{SERVER_PORT}")

    while True:
        try:
            cient_socket, client_address = server_socket.accept()
            print(f"Connected to: {client_address}")

            request = cient_socket.recv(4096).decode("utf-8") # mozda maknuti utf-8 zbog slika
            print(request)

            response = request_handler(request)
            cient_socket.sendall(response.encode()) # mozda ce olaksati slanje slika

            cient_socket.close()

        except Exception as exc:
            print(exc)
            break

    server_socket.close()

if __name__ == "__main__":
    main()
