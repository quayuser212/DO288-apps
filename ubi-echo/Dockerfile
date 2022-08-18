FROM registry.access.redhat.com/ubi8/ubi:8.0
USER 1001
#CMD bash -c "while true; i=0; do echo test $i; $i++; sleep 5; done"
CMD bash -c "i=0; while true; do echo test $i; sleep 5; ((i++)); done"
