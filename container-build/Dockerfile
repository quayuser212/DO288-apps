# Use the httpd-parent image as base
FROM quay.io/redhattraining/httpd-parent
LABEL Description="Child Dockerfile"
MAINTAINER karthikeyan<karthik>
ENV PORT=8080
EXPOSE ${PORT}
LABEL io.k8s.description="A basic Apache HTTP Server child image, uses ONBUILD" \
      io.k8s.display-name="Apache HTTP Server" \
      io.openshift.expose-services="8080:http" \
      io.openshift.tags="apache, httpd"
RUN sed -i "s/Listen 80/Listen ${PORT}/g" /etc/httpd/conf/httpd.conf && \
    chgrp -R 0 /var/run/httpd /var/log/httpd && \
    chmod -R g=u /var/run/httpd /var/log/httpd
USER 1001
