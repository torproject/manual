import ast
import io
import re

from setuptools import setup

with io.open('README.md', 'rt', encoding="utf8") as f:
    readme = f.read()

_description_re = re.compile(r'description\s+=\s+(?P<description>.*)')

with open('lektor_markdown_header_anchors.py', 'rb') as f:
    description = str(ast.literal_eval(_description_re.search(
        f.read().decode('utf-8')).group(1)))

setup(
    author='Armin Ronacher',
    author_email='armin.ronacher@active-4.com',
    description=description,
    keywords='Lektor plugin markdown static-site blog toc table-of-contents anchors headers',
    license='BSD',
    long_description=readme,
    long_description_content_type='text/markdown',
    name='lektor-markdown-header-anchors',
    py_modules=['lektor_markdown_header_anchors'],
    url='http://github.com/lektor/lektor-markdown-header-anchors',
    version='0.3',
    classifiers=[
        'Environment :: Plugins',
        'Environment :: Web Environment',
        'Framework :: Lektor',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
    ],
    entry_points={
        'lektor.plugins': [
            'markdown-header-anchors = lektor_markdown_header_anchors:MarkdownHeaderAnchorsPlugin',
        ]
    }
)
