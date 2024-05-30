# JSON Web Tokens (JWT) Introduction

## Overview

JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be
transferred between two parties. They are widely used for securely transmitting
information between parties as a JSON object. This information can be verified
and trusted because it is digitally signed.

### Structure of JWT

A JWT is divided into three parts:

1. **Header**: Includes the type of token (JWT) and the signing algorithm (e.g.,
   HMAC SHA256).
2. **Payload**: Contains the claims, which are statements about an entity
   (typically, the user) and additional data.
3. **Signature**: Ensures the token hasn't been altered. It is created by
   encoding the header, payload, and a secret key using the algorithm specified
   in the header.

### Example

Consider the following JWT:
