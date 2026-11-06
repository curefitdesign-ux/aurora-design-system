#!/usr/bin/env python3
"""Serve the Aurora explorer and shared local assets on loopback."""
import argparse
import functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class PreviewServer(ThreadingHTTPServer):
    request_queue_size = 128
    daemon_threads = True


class PreviewHandler(SimpleHTTPRequestHandler):
    def log_message(self, _format, *_args):
        # Font/image bursts should not block on an unattended terminal log pipe.
        pass


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=4174)
    parser.add_argument('--directory', type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument('--open-path', default='/dashboard/', help='Explorer route printed when the server starts')
    args = parser.parse_args()
    handler = functools.partial(PreviewHandler, directory=str(args.directory.resolve()))
    with PreviewServer(('127.0.0.1', args.port), handler) as server:
        print(f'Aurora Design System 2.0: http://127.0.0.1:{server.server_port}{args.open_path}', flush=True)
        server.serve_forever()


if __name__ == '__main__':
    main()
